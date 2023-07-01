import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import CategoryForm from "../../components/Form/CategoryForm";
import Layout from "../../components/Layout/Layout";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/category/create-category",
        {
          name,
        }
      );
      if (data.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "/api/v1/category/get-category"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting the category");
    }
  };
  getAllCategory();

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  return (
    <Layout>
      <div className="container dashboard ms-auto m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <table className="table w-75">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((c) => (
                  <>
                    <tr>
                      <td key={c._id}>{c.name}</td>
                      <td>
                        <div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModa2"
                            >
                              Delete
                            </button>
                            {/* Modal */}
                            <div
                              className="modal fade bg-danger bg-opacity-50"
                              id="exampleModa2"
                              tabIndex={-1}
                              aria-labelledby="exampleModalLabe2"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Delete
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  <div className="modal-body">
                                    <h1 class="text-danger">Are you sure?</h1>
                                    <p>
                                      Do you really want to delete these
                                      records? This process cannot be undone.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger ms-2"
                                      onClick={() => {
                                        handleDelete(c._id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Modal */}
                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex={-1}
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Update Collection
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    />
                                  </div>
                                  <div className="modal-body">
                                    <CategoryForm
                                      value={updatedName}
                                      setValue={setUpdatedName}
                                      handleSubmit={handleUpdate}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
