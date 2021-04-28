import CornerButton from './CornerButton';

export default function ButtonBox(props) {
  let buttonList = props.buttons;


  return (<div className="mb-2 mr-2 bottom-0 right-0 absolute inline-flex">
     {buttonList.map((item) => (
    <CornerButton key={item.name} onClick={item.action} icon={item.icon} />
  ))}
  </div>);
}