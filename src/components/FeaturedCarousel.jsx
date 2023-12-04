// CSS Imports
import "../css/featuredCarousel.css";
// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// Other Imports
import { useState, useEffect } from "react";
import featuredItems from "../assets/CarouselItems";

const FeaturedCarousel = () => {
    const [currFeaturedItem, setCurrFeaturedItem] = useState([]);
    const [itemsList, setItemsList] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0);

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
                            width="250px"
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
                            {itemPrice}
                        </div>
                        <div className="featuredItem__product-summary-btns">
                            Add to Cart or else
                        </div>
                    </div>
                </div>,
                // i,
            ]);
        }

        setItemsList(featuredItemsList);
        setCurrFeaturedItem(featuredItemsList[0]);
    }, []);
    // const currItemIndex = currFeaturedItem[1];

    return (
        <>
            <div className="carousel">
                <button
                    className="carousel__btn btn-left"
                    onClick={() => {
                        // if (sliderIndex - 1 >= 0) {
                        //     const slider =
                        //         document.getElementById("featuredItem");
                        //     console.log("i:", sliderIndex - 1);
                        //     console.log("%:", (sliderIndex - 1) * 100);
                        //     slider.style.transform = `translateX(calc(${
                        //         sliderIndex - 1
                        //     }*-100%))`;
                        //     setSliderIndex(sliderIndex - 1);
                        // }
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
                        // if (sliderIndex + 1 <= itemsList.length) {
                        //     const slider =
                        //         document.getElementsByClassName("featuredItem");
                        //     console.log("i:", sliderIndex + 1);
                        //     console.log("%:", (sliderIndex + 1) * 100);
                        //     slider.style.transform = `translateX(calc(${
                        //         sliderIndex + 1
                        //     }*-100%))`;
                        //     setSliderIndex(sliderIndex + 1);
                        // }
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
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </>
    );
};

export default FeaturedCarousel;
