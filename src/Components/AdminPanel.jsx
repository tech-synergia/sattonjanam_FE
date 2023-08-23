import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "antd";


const AdminPanel = () => {
  const [profileData, setProfileData] = useState([]);


  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "https://sattonjanamm.onrender.com/user/all"
      );
      setProfileData(response); // Use response.data.pros directly
      console.log(response)
    } catch (error) {
      console.error("Error fetching professionals:", error);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name", className:"registration-table-column"  },
    // { title: "Email", dataIndex: "email", key: "email", className:"registration-table-column hide-mobile" },
    // { title: "Phone", dataIndex: "phone", key: "phone", className:"registration-table-column"  },
    {
      title: "Actions",
      key: "actions",
      className:"registration-table-column",
      render: (text, record) => (
        <span>
          <Button className="btn3" onClick={() => handleReject(record)}>Delete</Button>
        </span>
      ),
    },
  ];

  const handleReject = async (record) => {
    try {
      const response = await axios.delete(
        "https://skillbanaobe.onrender.com/professional/declinePro",
        {
          data: { proId: record._id },
        }
      );
      // if (response.status === 200) {
      //   console.log("Professional rejected and data deleted:", record);
      //   const updatedData = profileData.filter(
      //     (prof) => prof._id !== record._id
      //   );
        // setProfileData(updatedData);
      // }
    } catch (error) {
      console.error("Error rejecting professional:", error);
    }
  };

  return <Table className="registration-table" dataSource={profileData} columns={columns} rowClassName={() => 'no-background'}/>
};

export default AdminPanel;

