import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/prayertimes.css";

const PrayerTimes = ({ user }) => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [updatedTimes, setUpdatedTimes] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      if (user?.mosque) {
        try {
          const docRef = doc(db, "Mosques", user.mosque);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const mosqueData = docSnap.data();
            const allTimes = mosqueData.data;

            if (!Array.isArray(allTimes)) {
              console.error("Expected 'data' to be an array but got:", allTimes);
              return;
            }

            const currentDate = new Date().toISOString().split("T")[0];
            const todayIndex = allTimes.findIndex((entry) => entry.d_date === currentDate);

            if (todayIndex !== -1) {
              setPrayerTimes(allTimes[todayIndex]);
              setUpdatedTimes(allTimes[todayIndex]);
              setCurrentIndex(todayIndex);
            } else {
              console.error("No prayer times available for today.");
            }
          } else {
            console.error("No prayer times found for this mosque!");
          }
        } catch (error) {
          console.error("Error fetching prayer times:", error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPrayerTimes();
  }, [user?.mosque]);

  const handleEditToggle = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const handleChange = (key, value) => {
    setUpdatedTimes((prevTimes) => ({
      ...prevTimes,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (user?.mosque && currentIndex !== null) {
        const docRef = doc(db, "Mosques", user.mosque);

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const allTimes = docSnap.data().data;

          if (!Array.isArray(allTimes)) {
            console.error("Expected 'data' to be an array but got:", allTimes);
            return;
          }

          allTimes[currentIndex] = {
            ...allTimes[currentIndex],
            ...updatedTimes,
          };

          await updateDoc(docRef, { data: allTimes });
          setPrayerTimes(updatedTimes);
          setEditMode(false);
          console.log("Prayer times updated successfully!");
        } else {
          console.error("No data found for this mosque.");
        }
      }
    } catch (error) {
      console.error("Error updating prayer times:", error.message);
    }
  };

  const orderedKeys = [
    { key: "fajr_begins", label: "Fajr" },
    { key: "fajr_jamah", label: "Fajr Jamat" },
    { key: "sunrise", label: "Sunrise" },
    { key: "zuhr_begins", label: "Dhuhr" },
    { key: "zuhr_jamah", label: "Dhuhr Jamat" },
    { key: "asr_mithl_1", label: "Asr" },
    { key: "asr_jamah", label: "Asr Jamat" },
    { key: "maghrib_begins", label: "Maghrib" },
    { key: "maghrib_jamah", label: "Maghrib Jamat" },
    { key: "isha_begins", label: "Isha" },
    { key: "isha_jamah", label: "Isha Jamat" },
  ];

  return (
    <div className="prayer-container">
      {loading ? (
        <p>Loading prayer times...</p>
      ) : prayerTimes ? (
        <div className="prayer-card">
          <h1 className="masjid-name">{user.mosque}</h1>
          <h2 className="prayer-date">{prayerTimes.d_date}</h2>
          <div className="prayer-grid">
            {orderedKeys.map(({ key, label }) => (
              <div key={key} className="prayer-item">
                <span className="prayer-label">{label}</span>
                {editMode && key.includes("jamah") ? (
                  <input
                    type="time"
                    value={updatedTimes[key] || ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                ) : (
                  <span className="prayer-time">{prayerTimes[key]}</span>
                )}
              </div>
            ))}
          </div>
          <div className="prayer-actions">
            <button onClick={handleEditToggle}>
              {editMode ? "Cancel" : "Edit Jamah Times"}
            </button>
            {editMode && <button onClick={handleSave}>Save</button>}
          </div>
        </div>
      ) : (
        <p>No prayer times available for today.</p>
      )}
    </div>
  );
};

export default PrayerTimes;
