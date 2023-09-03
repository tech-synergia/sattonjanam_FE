import '../scss/ServiceComponent.scss'

const ServiceComponent = ({ imageSrc, heading, content, summary }) => {
  return (
    
     <div className="serviceComponent">

          <h3>{heading}</h3>
          <p>{content}</p>
          <img src={imageSrc} alt="no image" />
          <p>{summary}</p>
     </div>
    
  );
};

export default ServiceComponent;
