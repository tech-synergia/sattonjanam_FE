import React from 'react';
import { Row, Col } from 'antd';
import '../scss/Success.scss'

const Success = () => {
  const data = [
    {
      image: 'https://www.wedgatematrimony.com/wp-content/uploads/2022/04/deepak-and-deepika-raheja-1.jpg',
      title: 'Swinky & Pomil',
      content: 'Pomil came from a well established business family wherein he had acquired sharp business acumen in his ambitious genes. He had a very good looking and optimistic persona mixed with moral and cultural ethos imbibed from his parents. On the other hand we had Swinky, a charming, slim, happy go lucky and balanced girl. We organized their first meeting at our office premises alongwith family members where both the sides mutually liked each other so well that next set of meetings between both individuals, followed by family meetings happened in quick succession. Within a span of few months, both the families finalized a happy marriage decision between two souls made for each others.',
    },
    // {
    //   image: 'https://www.wedgatematrimony.com/wp-content/uploads/2022/04/2.jpg',
    //   title: 'Vipul & Nietika',
    //   content: 'Nietika parents enrolled us stating clear expectations for a businessman prospect who is handsome looking, tall, clear hearted and independent from a good family background. With god’s blessings, it didn’t take us long to arrange the first meeting between both the families alongwith prospects. It seemed like love at first sight where most of the things clicked between each other and it transpired into series of family interactions to further strengthen the alliance finalization efforts. A sweet and life time decision was soon taken to go ahead with the finalization of this match, followed by happy marriage ceremonies with all the nears and dears.',
    // },
  ];

  return (
    <div className='success'>
    {data.map((item, index) => (
      <Row key={index} gutter={16} style={{ marginBottom: '150px' }} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        {index % 2 === 0 ? (
          <>
            <Col xs={24} sm={24} md={12}>
              <img src={item.image} alt={`Image ${index + 1}`} className="custom-image" />
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="content">
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.content}</p>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col span={12}>
              <div className="content">
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.content}</p>
              </div>
            </Col>
            <Col span={12}>
              <img src={item.image} alt={`Image ${index + 1}`} className="custom-image" />
            </Col>
          </>
        )}
      </Row>
    ))}
  </div>
  );
};

export default Success;
