import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPage } from "../store/actions/page";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import Footer from "../parts/Footer";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Testimony from "../parts/Testimony";
import Activities from "../parts/Activities";

function DetailsPage_() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  useEffect(() => {
    const fnLoadPage = async () => {
      try {
        if (!page[id]) {
          const response = await dispatch(fetchPage(`/detail-page/${id}`, id));
          document.title = `Staycation | ${response?.item?.title || "Page Title"}`;
        }
      } catch (error) {
        console.error("Error loading page:", error);
      }
    };

    window.scrollTo(0, 0);
    fnLoadPage();
  }, [dispatch, page, id]);

  if (!page[id]) {
    return null; // Consider showing a loading state here
  }

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <section className="container">
        <div className="row">
          <div className="col-12 col-lg-7 pr-5">
            <PageDetailDescription data={page[id].item} />
          </div>
          <div className="col-12 col-lg-5">
            <BookingForm />
          </div>
        </div>
      </section>

      <Activities data={page[id].item.activityId} />
      <Testimony data={page[id].testimonial} />

      <Footer />
    </>
  );
}

export default DetailsPage_;
