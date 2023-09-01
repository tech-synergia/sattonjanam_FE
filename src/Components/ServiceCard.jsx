import { Card, Typography } from "antd";
import "../scss/ServiceCard.scss";

const { Title, Text } = Typography;

const weddingData = [
  {
    _id: 1,
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 2,
    title: "Sikh Matrimonial Service",
    content:
      "Name given to a marriage ceremony in Sikh Culture is called “Anand Karaj” which means “Blissful Union”. Sikh matrimonial ceremonies...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/sikh-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 3,
    title: "Hindu Matrimonial Service",
    content:
      "The Hindu community is a diverse, colourful and enchanting ethnic group of people which make up for around 80% of...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/hindu-marriage-bureau-matrimonial-services.jpg",
  },
  {
    _id: 4,
    title: "Jain Matrimonial Services",
    content:
      "Jainsim is the sixth largest religion in India, and is mainly concentrated around the western states of Gujarat and Rajasthan...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/marriage-bureau-matrimonial-services-delhi-ncr.jpg",
  },
  {
    _id: 5,
    title: "Elite Matrimonial Service",
    content:
      "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/elite-matrimony-marriage-bureau-delhi.jpg",
  },
  {
    _id: 6,
    title: "NRI Matrimonial Service",
    content:
      "NRI’s, are people who are born in India but reside abroad in a different country. Despite living in foreign countries...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/nri-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 7,
    title: "Late Marriage Matrimony",
    content:
      "In the Indian subcontinent, the ideal age for marriage falls in the range of twenties and early thirties. Most people...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/late-marriage-bureau-delhi.jpg",
  },
  {
    _id: 8,
    title: "Re-Marriage Services",
    content:
      "A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/remarriage-1.jpg",
  },
  {
    _id: 9,
    title: "Pre-Wedding Dietician Services",
    content:
      "In the current societal scenario, a wedding ceremony is taken as a very serious event to present your hospitality and...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/ditecian.jpg",
  },
  {
    _id: 4,
    title: "Wedding Photography",
    content:
      "Portfolio & Wedding Shoots by Celebrity Photographer, Sachin Kumar, Wedgate Matrimony’s Exclusive Associate Sachin Kumar has captured various shoots of...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/wedding-photography-services-delhi-ncr.jpg",
  },
  {
    _id: 5,
    title: "Wedding Events Services",
    content:
      "Weddings are an extremely busy affair in India. It can take months for a family to properly prepare for the...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/wedding-event-services-1.jpg",
  },
  {
    _id: 6,
    title: "Aggarwal | Gupta | Baniya ",
    content:
      "Aggarwal / Gupta / Baniya caste hails from the Vaishya caste which is considered to be a mercantile clan of...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/elite-marriage-bureau-matrimonial-services-delhi.jpg",
  },
];

export const WeddingImage = () => {
  return (
    <div className="details">
      {weddingData.map((dataItem) => (
        <Card className="card">
            <img src={dataItem.imageUrl} alt="" />
            <div className="text-content">
                <Title level={3}>{dataItem.title}</Title>
                <Text> {dataItem.content} </Text>
            </div>
        </Card>
      ))}
    </div>
  );
};

function ServiceCard() {
  return <WeddingImage />;
}

export default ServiceCard;
