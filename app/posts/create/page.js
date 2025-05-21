"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const AddNewPost = () => {
  const router = useRouter();
  const [submitErr, setSubmitErr] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        fetch("/api/posts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(
            result.message || "An error occurred while creating the post"
          );
        }
        formik.resetForm();
        router.push("/posts");
      } catch (error) {
        setSubmitErr(error);
      }
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Description is required"),
      title: Yup.string().required("Title is required"),
    }),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-xl border-2 border-blue-600 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Add Post</h1>
        {submitErr && <div className="text-red-500">{submitErr.message}</div>}
        <p className="text-gray-500">Create a new post</p>
        <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
          <div>
            <input
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter Title"
              name="title"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm text-right">
                {formik.errors.title}
              </div>
            )}
          </div>
          <div>
            <textarea
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter description here..."
              name="description"
              {...formik.getFieldProps("description")}
              rows="5"
              maxLength="5000"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm text-right">
                {formik.errors.description}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
          >
            {formik.isSubmitting ? "Processing..." : "Add Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
