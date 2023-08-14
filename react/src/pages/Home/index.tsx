import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import featuredCities from "../../constants/featuredCities";
import postcards from "../../constants/postcards";
import propertyTypes from "../../constants/propertyTypes";
import {
  countEventByCities,
  countEventByEventTypes,
  getEvents,
} from "../../services/events";
import {
  Container,
  Destinations,
  DestinationsSubTitle,
  DestinationsTitle,
  FeaturedProperties,
  FeaturedPropertiesRating,
  FeaturedPropertiesReviews,
  FeaturedPropertiesScore,
  FeaturedPropertiesScoreTitle,
  FeaturedPropertiesText,
  FeaturedPropertiesTitle,
  PostCard,
  PostCardImage,
  PostCardOverlay,
  PostCardOverlaySubText,
  PostCardOverlayText,
  PostCardOverlayTextImage,
  PostCards,
  PropertyTypes,
  PropertyTypesTitle,
  SliderItem,
  SliderItemImage,
  SliderItemSubTitle,
  SliderItemText,
} from "./styles";

type Props = {};

const Home = (props: Props) => {
  const [featuredCityNames, featuredCityImages] = useMemo(() => {
    const featuredCityNames = [];
    const featuredCityImages = [];

    for (const city of featuredCities) {
      featuredCityNames.push(city.name);
      featuredCityImages.push(city.image);
    }

    return [featuredCityNames, featuredCityImages];
  }, []);

  const [eventTypeTitles, eventTypeImages] = useMemo(() => {
    const eventTypeTitles = [];
    const eventTypeImages = [];

    for (const propertyType of propertyTypes) {
      eventTypeTitles.push(propertyType.title);
      eventTypeImages.push(propertyType.image);
    }

    return [eventTypeTitles, eventTypeImages];
  }, []);

  const { data: eventCountByCities } = useQuery(["eventCountByCities"], () =>
    countEventByCities(featuredCityNames)
  );

  const { data: propertyCountByPropertyTypes } = useQuery(
    ["propertyCountByPropertyTypes"],
    () => countEventByEventTypes(eventTypeTitles)
  );

  const { data: featuredProperties } = useQuery(["featuredProperties"], () =>
    getEvents({ featured: true, limit: 5 })
  );

  return (
    <Container>
      {eventCountByCities && (
        <Destinations>
          <DestinationsTitle>Explore India</DestinationsTitle>
          <DestinationsSubTitle>
            These popular destinations have a lot to offer
          </DestinationsSubTitle>
          <Slider slidesToShow={5} infinite={false}>
            {eventCountByCities.map((event, index) => (
              <Link to={`/search_results?city=${event.city}`} key={index}>
                <SliderItem>
                  <SliderItemImage
                    src={featuredCityImages[index]}
                    width={185}
                    height={185}
                  />
                  <SliderItemText>{event.city}</SliderItemText>
                  <SliderItemSubTitle>{event.count} events</SliderItemSubTitle>
                </SliderItem>
              </Link>
            ))}
          </Slider>
        </Destinations>
      )}

      {propertyCountByPropertyTypes && (
        <PropertyTypes>
          <PropertyTypesTitle>Browse by event type</PropertyTypesTitle>
          <Slider slidesToShow={4} infinite={false}>
            {propertyCountByPropertyTypes.map((event, index) => (
              <Link to={`/search_results?type=${event.type}`} key={index}>
                <SliderItem>
                  <SliderItemImage
                    src={eventTypeImages[index]}
                    width={240}
                    height={185}
                  />
                  <SliderItemText>{event.type}</SliderItemText>
                  <SliderItemSubTitle>{event.count} events</SliderItemSubTitle>
                </SliderItem>
              </Link>
            ))}
          </Slider>
        </PropertyTypes>
      )}

      <PostCards>
        {postcards.map((postcard, index) => (
          <Link to={`/search_results?city=${postcard.city}`} key={index}>
            <PostCard>
              <PostCardImage src={postcard.image} />
              <PostCardOverlay>
                <PostCardOverlayText>
                  {postcard.city}{" "}
                  <PostCardOverlayTextImage src={postcard.flag} />
                </PostCardOverlayText>
                <PostCardOverlaySubText>
                  {postcard.events} events
                </PostCardOverlaySubText>
              </PostCardOverlay>
            </PostCard>
          </Link>
        ))}
      </PostCards>

      {featuredProperties && (
        <FeaturedProperties>
          <FeaturedPropertiesTitle>Homes guests love</FeaturedPropertiesTitle>
          <Slider slidesToShow={4} infinite={false}>
            {featuredProperties.map((event) => (
              <Link to={`/events/${event._id}`} key={event._id}>
                <SliderItem>
                  <SliderItemImage
                    src={event.images[0]}
                    width={240}
                    height={240}
                  />
                  <FeaturedPropertiesText>{event.name}</FeaturedPropertiesText>
                  <SliderItemSubTitle>{event.city}</SliderItemSubTitle>
                  <FeaturedPropertiesText
                    style={{ fontWeight: "bold", marginTop: "10px" }}
                  >
                    Starting form ₹ {event.cheapestPrice}
                  </FeaturedPropertiesText>
                  <FeaturedPropertiesScore>
                    <FeaturedPropertiesRating>9.0</FeaturedPropertiesRating>
                    <FeaturedPropertiesScoreTitle>
                      Superb
                    </FeaturedPropertiesScoreTitle>
                    <FeaturedPropertiesReviews>
                      3203 reviews
                    </FeaturedPropertiesReviews>
                  </FeaturedPropertiesScore>
                </SliderItem>
              </Link>
            ))}
          </Slider>
        </FeaturedProperties>
      )}
    </Container>
  );
};

export default Home;
