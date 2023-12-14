export default function PageDetailDescription({ data }) {
  const renderDescription = () => {
    return (
      <div>
        <h4>About the place</h4>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    );
  };
  const renderFeatures = () => {
    if (!data.featureId || data.featureId.length === 0) {
      return <div>Tidak Ada Feature</div>;
    }

    return (
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.map((feature, index) => (
          <div key={`feature-${index}`} className="col-4 col-lg-3" style={{ marginBottom: 20 }}>
            <img width="38" className="d-block mb-2" src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`} alt={feature.name} />
            <span>
              {feature.qty} <span className="text-gray-500 font-weight-light">{feature.name}</span>
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main>
      {renderDescription()}
      {renderFeatures()}
    </main>
  );
}
