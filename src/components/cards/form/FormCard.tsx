export interface IFormCard {
  sampleTextProp: string;
}

const FormCard: React.FC<IFormCard> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default FormCard;
