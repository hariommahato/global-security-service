import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: [
    "Carousel",
    "Welcome",
    "Service",
    "Client",
    "Contact",
    "Feedback",
    "Faq",
    "About",
    "Team"
  ],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getHomeCarousel: builder.query({
      query: () => ({
        url: "/carousel",
        method: "GET",
      }),
      providesTags: ["Carousel"],
    }),
    createHomeCarousel: builder.mutation({
      query: (data) => {
        return {
          url: `carousel`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Carousel"],
    }),
    getCarouselDetails: builder.query({
      query: (id) => {
        return {
          url: `/carousel/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Carousel"],
    }),
    updateCarousel: builder.mutation({
      query: ({ id, carouselData }) => {
        return {
          url: `/carousel/${id}`,
          method: "PUT",
          body: carouselData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Carousel"],
    }),
    deleteCarousel: builder.mutation({
      query: (id) => {
        return {
          url: `carousel/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Carousel"],
    }),
    getWelcomeData: builder.query({
      query: () => ({
        url: "/welcomedata",
        method: "GET",
      }),
      providesTags: ["Welcome"],
    }),
    getWelcomeDetails: builder.query({
      query: (id) => {
        return {
          url: `/welcomedata/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Welcome"],
    }),
    createWelcomeData: builder.mutation({
      query: (myForm) => {
        return {
          url: `/welcomedata`,
          method: "POST",
          body: myForm,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Welcome"],
    }),
    updateWelcomeData: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `welcomedata/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Welcome"],
    }),
    deleteWelcomeData: builder.mutation({
      query: (id) => {
        return {
          url: `/welcomedata/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Welcome"],
    }),

    createServices: builder.mutation({
      query: (myForm) => {
        return {
          url: `/services`,
          method: "POST",
          body: myForm,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Service"],
    }),
    getServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    getServicesDetails: builder.query({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Service"],
    }),
    updateServices: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/services/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Service"],
    }),
    deleteService: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Service"],
    }),

    getClient: builder.query({
      query: () => ({
        url: "/client",
        method: "GET",
      }),
      providesTags: ["Client"],
    }),
    createClient: builder.mutation({
      query: (data) => {
        return {
          url: `/client`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Client"],
    }),
    getClientDetails: builder.query({
      query: (id) => {
        return {
          url: `/client/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Client"],
    }),
    updateClient: builder.mutation({
      query: ({ id, clientData }) => {
        return {
          url: `/client/${id}`,
          method: "PUT",
          body: clientData,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => {
        return {
          url: `client/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Client"],
    }),

    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (data) => {
        return {
          url: `/contact`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Contact"],
    }),
    getContactDetails: builder.query({
      query: (id) => {
        return {
          url: `/contact/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/contact/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => {
        return {
          url: `contact/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contact"],
    }),

    getFeedback: builder.query({
      query: () => ({
        url: "/feedback",
        method: "GET",
      }),
      providesTags: ["Feedback"],
    }),
    createFeedback: builder.mutation({
      query: (data) => {
        return {
          url: `/feedback`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Feedback"],
    }),
    getFeedabackDetails: builder.query({
      query: (id) => {
        return {
          url: `/feedback/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Feedback"],
    }),
    updateFeedback: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/feedback/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Feedback"],
    }),
    deleteFeedback: builder.mutation({
      query: (id) => {
        return {
          url: `feedback/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Feedback"],
    }),

    getFaq: builder.query({
      query: () => ({
        url: "/faq",
        method: "GET",
      }),
      providesTags: ["Faq"],
    }),
    createFaq: builder.mutation({
      query: (data) => {
        return {
          url: `/faq`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Faq"],
    }),
    getFaqDetails: builder.query({
      query: (id) => {
        return {
          url: `/faq/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Faq"],
    }),
    updateFaq: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/faq/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Faq"],
    }),
    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          url: `faq/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Faq"],
    }),



    getAbout: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
      providesTags: ["About"],
    }),
    createAbout: builder.mutation({
      query: (data) => {
        return {
          url: `/about`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["About"],
    }),
    getAboutDetails: builder.query({
      query: (id) => {
        return {
          url: `/about/${id}`,
          method: "GET",
        };
      },
      providesTags: ["About"],
    }),
    updateAbout: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/about/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["About"],
    }),
    deleteAbout: builder.mutation({
      query: (id) => {
        return {
          url: `about/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["About"],
    }),
    getTeam: builder.query({
      query: () => ({
        url: "/team",
        method: "GET",
      }),
      providesTags: ["Team"],
    }),
    createTeam: builder.mutation({
      query: (data) => {
        return {
          url: `/team`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Team"],
    }),
    getTeamDetails: builder.query({
      query: (id) => {
        return {
          url: `/team/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Team"],
    }),
    updateTeam: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/team/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Team"],
    }),
    deleteTeam: builder.mutation({
      query: (id) => {
        return {
          url: `team/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Team"],
    }),











    getUsers: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: `/register`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Users"],
    }),
    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/admin/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/${id}`,
          method: "PUT",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },

      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `admin/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useCreateHomeCarouselMutation,
  useDeleteCarouselMutation,
  useGetCarouselDetailsQuery,
  useGetHomeCarouselQuery,
  useUpdateCarouselMutation,
  useCreateWelcomeDataMutation,
  useDeleteWelcomeDataMutation,
  useGetWelcomeDataQuery,
  useUpdateWelcomeDataMutation,
  useGetWelcomeDetailsQuery,
  useCreateServicesMutation,
  useDeleteServiceMutation,
  useGetServicesDetailsQuery,
  useGetServicesQuery,
  useUpdateServicesMutation,
  useCreateClientMutation,
  useGetClientDetailsQuery,
  useGetClientQuery,
  useUpdateClientMutation,
  useDeleteClientMutation,
  useCreateContactMutation,
  useGetContactDetailsQuery,
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetFeedabackDetailsQuery,
  useGetFeedbackQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
  useCreateFaqMutation,
  useGetFaqDetailsQuery,
  useGetFaqQuery,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
  useCreateAboutMutation,
  useGetAboutDetailsQuery,
  useGetAboutQuery,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
  useGetTeamDetailsQuery,
  useGetTeamQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetSingleUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} = globalApi;
