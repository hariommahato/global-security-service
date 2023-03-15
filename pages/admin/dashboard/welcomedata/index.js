import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";

import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useDeleteWelcomeDataMutation, useGetWelcomeDataQuery } from "@/services/api";

const WelcomeData = () => {
  const { data, isLoading } = useGetWelcomeDataQuery();
  const [deleteWelcomeData, { isSuccess, isError }] = useDeleteWelcomeDataMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
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
              // margin: "auto",
            }}
          >
            <h5 style={{textAlign:"center"}}>All WelcomeData List </h5>
            <Table responsive striped>
            {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th style={{minWidth:"20rem"}}>Description</th>
                  <th colSpan={1}>ImageUrl</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.welcomedata?.map((item, i) => {
                  return (
                    <tr key={i}>
                   
                      <td>{item._id}</td>
                      <td>{item.description}</td>
                      <td>{item?.images?.url}</td>
                     
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/welcomedata/${item?._id}`}
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
                              deleteWelcomeData(item?._id);
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

export default WelcomeData;
WelcomeData.getLayout = function PageLayout(page) {
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
