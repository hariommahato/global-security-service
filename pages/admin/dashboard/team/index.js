import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { Providers } from "@/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useDeleteTeamMutation, useGetTeamQuery } from "@/services/api";
import { useRouter } from "next/router";

const Team = () => {
  const { data, isLoading } = useGetTeamQuery();
  const router = useRouter();
  const [deleteTeam, { isSuccess, isError }] = useDeleteTeamMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/team");
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
                  <th>Fullname</th>
                  <th>Post</th>
                  <th >description</th>
                  <th >ImageUrl</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.teamdata?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item?.post}</td>
                      <td>{item?.description}</td>
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
                            href={`/admin/dashboard/team/${item?._id}`}
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
                              deleteTeam(item?._id);
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

export default Team;
Team.getLayout = function PageLayout(page) {
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
