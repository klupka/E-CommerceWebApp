// CSS Imports
import "../css/featuredCarousel.css";
// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
// Other Imports
import { React, useState, useEffect } from "react";
import featuredItems from "../assets/CarouselItems";

const FeaturedCarousel = () => {
    const [itemsList, setItemsList] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [pageIndicators, setPageIndicators] = useState([]);

    // Executes on page load (one time)
    useEffect(() => {
        const featuredItemsList = [];
        for (let i = 0; i < featuredItems.length; i++) {
            const itemName = featuredItems[i].itemName;
            const itemRating = featuredItems[i].itemRating;
            const itemDescription = featuredItems[i].itemDescription;
            const itemPrice = featuredItems[i].itemPrice;
            const itemImage = featuredItems[i].itemImage;

            featuredItemsList.push([
                <div key={i} className="featuredItem" id="featuredItem">
                    <div className="featuredItem__product-image">
                        <img
                            src={itemImage}
                            alt="Image of Product"
                            width="400px"
                        />
                    </div>
                    <div className="featuredItem__product-summary">
                        <div className="featuredItem__product-summary-title">
                            {itemName}
                        </div>
                        <div className="featuredItem__product-summary-rating">
                            {itemRating}
                        </div>
                        <div className="featuredItem__product-summary-description">
                            {itemDescription}
                        </div>
                        <div className="featuredItem__product-summary-price">
                            ${itemPrice}
                        </div>
                        <div className="featuredItem__product-summary-btns">
                            <button className="btn-add-to-cart">
                                Add to Cart
                            </button>
                            <button className="btn-more-details">
                                More Details
                            </button>
                        </div>
                    </div>
                </div>,
            ]);
        }

        setItemsList(featuredItemsList);
        // Default starting array for pageIndicators
        const pageIndicatorsTempArr = [];
        for (let j = 0; j < featuredItemsList.length; j++) {
            if (j === 0) {
                // Push true for first element
                pageIndicatorsTempArr.push(true);
            } else {
                // Push false for rest of elements
                pageIndicatorsTempArr.push(false);
            }
        }
        console.log("default", pageIndicatorsTempArr);
        setPageIndicators(pageIndicatorsTempArr);
    }, []);

    const solid = (
        <svg
            className="solid"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="12"
            viewBox="0 0 512 512"
        >
            <path
                fill="#FFFFFF"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
            />
        </svg>
    );
    const line = (
        <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            height="5"
            width="5"
            viewBox="0 0 512 512"
        >
            <path
                fill="#757575"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
            />
        </svg>
    );

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button
                    className="carousel__btn btn-left"
                    onClick={() => {
                        if (sliderIndex - 1 >= 0) {
                            for (
                                var i = 0;
                                i <
                                document.getElementsByClassName("featuredItem")
                                    .length;
                                i++
                            ) {
                                var element =
                                    document.getElementsByClassName(
                                        "featuredItem"
                                    )[i];
                                element.style.transform = `translateX(calc(${
                                    sliderIndex - 1
                                }*-100%))`;
                                setSliderIndex(sliderIndex - 1);
                            }
                            // pageIndicators
                            pageIndicators[sliderIndex] = false;
                            pageIndicators[sliderIndex - 1] = true;
                            console.log("now:", pageIndicators);
                            setPageIndicators(pageIndicators);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} flip="horizontal" />
                </button>
                <div
                    className="carousel__product-list"
                    id="carousel__product-list"
                >
                    {itemsList}
                </div>
                <button
                    className="carousel__btn btn-right"
                    onClick={() => {
                        if (sliderIndex + 1 <= itemsList.length - 1) {
                            for (
                                var i = 0;
                                i <
                                document.getElementsByClassName("featuredItem")
                                    .length;
                                i++
                            ) {
                                var element =
                                    document.getElementsByClassName(
                                        "featuredItem"
                                    )[i];
                                element.style.transform = `translateX(calc(${
                                    sliderIndex + 1
                                }*-100%))`;
                                setSliderIndex(sliderIndex + 1);
                            }
                            // pageIndicators
                            pageIndicators[sliderIndex] = false;
                            pageIndicators[sliderIndex + 1] = true;
                            console.log("now:", pageIndicators);
                            setPageIndicators(pageIndicators);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="page-indicators">
                {pageIndicators.map((element) => (element ? solid : line))}
            </div>
        </div>
    );
};

export default FeaturedCarousel;
