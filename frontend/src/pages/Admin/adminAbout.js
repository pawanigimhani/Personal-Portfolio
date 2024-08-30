import React from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const temp = values.skill.split(",");
      values.skill = temp;
      dispatch(ShowLoading());
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio/update-about`, {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
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
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ ...portfolioData.about, skill: portfolioData.about.skill.join(" , ") }}
        >
        <Form.Item name="image" label="Image URL">
          <input placeholder="Image" />
        </Form.Item>
        <Form.Item name="paragraph1" label="Paragraph 1">
          <textarea placeholder="Paragraph 1" />
        </Form.Item>
        <Form.Item name="paragraph2" label="Paragraph 2">
          <textarea placeholder="Paragraph 2" />
        </Form.Item>
        <Form.Item name="skill" label="Skills">
          <input placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-primary text-white" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
