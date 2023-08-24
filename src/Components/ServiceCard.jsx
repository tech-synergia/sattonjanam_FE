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
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 3,
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 3,
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 3,
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
  {
    _id: 3,
    title: "Punjabi Matrimonial Service",
    content:
      "Punjabi weddings are renowned for being pompous and energetic. People hailing from the Punjabi ethnicity are joyous, playful and extremely...",
    imageUrl:
      "https://www.wedgatematrimony.com/wp-content/uploads/2019/09/punjabi-marriage-bureau-matrimonial-services-delhi.jpg",
  },
];

const WeddingImage = () => {
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
