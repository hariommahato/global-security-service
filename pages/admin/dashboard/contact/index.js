import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useDeleteContactMutation, useGetContactQuery } from "@/services/api";
import { useRouter } from "next/router";

const Contact = () => {
  const { data, isLoading } = useGetContactQuery();
  const router = useRouter();
  const [deleteContact, { isSuccess, isError }] = useDeleteContactMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/contact");
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
            <h5 style={{ textAlign: "center" }}>All Contact Data List </h5>
            <Table responsive striped>
              {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>ContactNumber</th>
                  <th style={{ minWidth: "10rem" }}>Subject</th>
                  <th style={{ minWidth: "10rem" }}>Enquiry</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.contactdata?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td> <td>{item.number}</td>{" "}
                      <td>{item.subject}</td>
                      <td>{item.enquiry}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/contact/${item?._id}`}
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
                              deleteContact(item?._id);
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

export default Contact;
Contact.getLayout = function PageLayout(page) {
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
