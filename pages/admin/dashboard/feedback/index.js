import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import {
  useDeleteFeedbackMutation,
  useGetContactQuery,
  useGetFeedbackQuery,
} from "@/services/api";
import { useRouter } from "next/router";

const Feedback = () => {
  const { data, isLoading } = useGetFeedbackQuery();
  const router = useRouter();
  const [deleteFeedback, { isSuccess, isError }] = useDeleteFeedbackMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/feedback");
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
            <h5 style={{ textAlign: "center" }}>All Feedback Data List </h5>
            <Table responsive striped>
              {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FullName</th>
                  <th style={{ minWidth: "10rem" }}>message</th>
                  <th>CreatedAt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.feedbackdata?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.message}</td>
                      <td>{item.createdAt}</td>

                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/feedback/${item?._id}`}
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
                              deleteFeedback(item?._id);
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

export default Feedback;
Feedback.getLayout = function PageLayout(page) {
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
