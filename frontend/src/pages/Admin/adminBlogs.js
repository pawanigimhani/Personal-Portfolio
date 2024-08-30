import React from "react";
import { Form, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminBlog() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { blog } = portfolioData;
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {

      dispatch(ShowLoading());

      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/update-blog`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/add-blog`, values);
      }

      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        setSelectedItemForEdit(null);
        setIsOpen(false);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error("Error in API request:", error);
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteBlog = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/delete-blog`, {
        _id: item._id,
      });
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
        dispatch(HideLoading());
        setIsOpen(false);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error("Error in API request:", error);
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end ">
        <button
          className="bg-primary text-white py-2 px-5 mb-5"
          onClick={() => {
            setSelectedItemForEdit(null);
            setIsOpen(true);
          }}
        >
          Add Blog
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 gap-5">
        {blog.map((blog, index) => (
          <div
            className="p-5 border shadow border-gray-400 flex flex-col gap-y-3"
            key={index}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <h1 className="text-lg font-bold mt-2 text-primary">
              Title: {blog.title}
            </h1>
            <hr></hr>
            <p className="text-sm">Description: {blog.description}</p>
            <a href={blog.link} className="text-primary">
              Link: {blog.link}
            </a>
            <div className="flex justify-end gap-x-3 mt-5">
              <button className="px-5 py-2 bg-red-500 text-white mt-2"
                onClick={() => {
                    deleteBlog(blog);
                }}>
                Delete
              </button>
              <button className="px-5 py-2 bg-primary text-white mt-2" onClick={() =>{
                setSelectedItemForEdit(blog);
                setIsOpen(true);
                setType("edit");
              }}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
       {(type === "add" || selectedItemForEdit) && (
         <Modal
         open={isOpen}
         title={selectedItemForEdit ? "Edit Blog" : "Add new one"}
         footer={null}
         onCancel={() => {
           setIsOpen(false);
           setSelectedItemForEdit(null);
         }}
       >
         <Form onFinish={onFinish} layout="vertical" 
            initialValues={selectedItemForEdit}>
           <Form.Item name="image" label="Image URL">
             <input placeholder="Image" />
           </Form.Item>
           <Form.Item name="title" label="Title">
             <input placeholder="Title" />
           </Form.Item>
           <Form.Item name="description" label="Description">
             <textarea placeholder="Description" />
           </Form.Item>
           <Form.Item name="link" label="Link">
             <input placeholder="Link" />
           </Form.Item>
           <div className="flex justify-end w-full">
             <button
               className="px-5 py-2 border-primary text-primary"
               onClick={() => {
                 setIsOpen(false);
                 setSelectedItemForEdit(null);
               }}
             >
               Cancel
             </button>
             <button className="px-5 py-2 bg-primary text-white">
               {selectedItemForEdit ? "Update" : "Add"}
             </button>
           </div>
         </Form>
       </Modal>
       )}
      </div>
    </div>
  );
}

export default AdminBlog;
