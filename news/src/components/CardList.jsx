import React from "react";
import { cardData } from "../cardData";
import { Link } from "react-router-dom";
import { useData, useLoading, useModal } from "../context/NewsContext";
import { Triangle } from "react-loader-spinner";

const CardList = () => {
  const { setModalContent } = useModal();
  const { isLoading } = useLoading();
  const { data } = useData();
  const Card = (props) => {
    return (
      <div>
        <div className="h-[460px] p-[24px] text-white text-2xl">
          <Link to={props.title}>
            <div
              className="relative "
              onClick={() => {
                setModalContent({
                  src: props.src,
                  cat: props.cat,
                  content: props.content,
                });
                // setShowModal(true);
              }}
            >
              <img
                alt="abc"
                src={props.src}
                className=" object-cover h-[420px] rounded-[24px] opacity-60"
              />
              <div className="flex flex-col z-10 absolute top-0 left-0 max-w-[100%] overflow-hidden p-4">
                {/* <span>{props.cat}</span> */}
                <span>{props.title}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-wrap [&>*]:md:w-[60%] [&>*:nth-child(4n+4)]:md:w-[60%] [&>*:not(:nth-child(4n+1)):not(:nth-child(4n+4))]:md:w-[40%] lg:px-64">
      {isLoading ? (
        <div className="  mx-auto mt-[50%] lg:mt-[20%] flex justify-center">
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        data.map((item, index) =>
          item.image_url === null ? (
            ""
          ) : (
            <Card
              key={index}
              index={index}
              // id={item.id}
              src={item.image_url}
              cat={item.category}
              title={item.title}
              content={item.content}
            />
          )
        )
      )}
    </div>
  );
};

export default CardList;
