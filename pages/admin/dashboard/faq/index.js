import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useDeleteFaqMutation, useGetFaqQuery } from "@/services/api";

const Faq = () => {
  const { data, isLoading } = useGetFaqQuery();
  const router = useRouter();
  const [deletFaq, { isSuccess, isError }] = useDeleteFaqMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/faq");
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
            <h5 style={{ textAlign: "center" }}>All Faq Data </h5>
            <Table responsive striped>
              {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.faqdata?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/faq/${item?._id}`}
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
                              deletFaq(item?._id);
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

export default Faq;
Faq.getLayout = function PageLayout(page) {
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
