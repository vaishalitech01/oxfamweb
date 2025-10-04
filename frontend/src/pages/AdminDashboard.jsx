import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [link, setLink] = useState("");
  const [version, setVersion] = useState("");
  const [apks, setApks] = useState([]);

  const token = localStorage.getItem("token");

  // ✅ env se API_URL
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/apk`)
      .then(res => res.json())
      .then(data => {
        if (data) setApks([data]);
      })
      .catch(err => console.error("Error fetching APK:", err));
  }, [API_URL]);

  const addApk = async () => {
    try {
      await fetch(`${API_URL}/apk`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ link, version })
      });
      window.location.reload();
    } catch (err) {
      console.error("Error adding APK:", err);
    }
  };

  const deleteApk = async (id) => {
    try {
      await fetch(`${API_URL}/apk/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      window.location.reload();
    } catch (err) {
      console.error("Error deleting APK:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <input 
        type="text" 
        placeholder="APK Link" 
        value={link} 
        onChange={(e)=>setLink(e.target.value)} 
        className="border p-2 mr-2"
      />
      <input 
        type="text" 
        placeholder="Version" 
        value={version} 
        onChange={(e)=>setVersion(e.target.value)} 
        className="border p-2 mr-2"
      />
      <button 
        onClick={addApk} 
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add APK
      </button>

      <div className="mt-6">
        {apks.map(apk => (
          <div 
            key={apk?._id} 
            className="border p-3 flex justify-between items-center"
          >
            <span>{apk?.link} (v{apk?.version})</span>
            <button 
              onClick={()=>deleteApk(apk._id)} 
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
