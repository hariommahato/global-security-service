import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useDeleteUserMutation, useGetUsersQuery } from "@/services/api";
import { useRouter } from "next/router";

const User = () => {
  const { data, isLoading } = useGetUsersQuery();
  const router = useRouter();
  const [deleteUser, { isSuccess, isError }] = useDeleteUserMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/user");
    }
  }, [isSuccess, toast]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "100%",
            }}
          >
            <h5 style={{ textAlign: "center" }}>All Services List </h5>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data?.users?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/user/${item?._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <span>
                              <AiFillEdit color="" />
                              Edit
                            </span>
                          </Link>
                          <Link
                            href={"/"}
                            style={{ textDecoration: "none", color: "red" }}
                            onClick={(e) => {
                              e.preventDefault();
                              deleteUser(item?._id);
                            }}
                          >
                            {" "}
                            <AiFillDelete />
                            Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
};

export default User;
User.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
