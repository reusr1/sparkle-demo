import Menu from "./Menu";
import PointTextMap from './PointTextMap';

export default function TextLayer(props) {
  return (
    <div className={"textLayer"} id={props?.data?.id}>
      {props?.data?.pointText && <PointTextMap pointText={props?.data?.pointText} />}

      {props.data.column && 
        <div className={`columnWrapper ${props?.data?.settings?.noPadding ? 'noPadding' : ''}`}>
          {props?.data?.column?.map((item, index) => {
            return (
              <item.type
                key={index}
                className={`${item.type} ${item?.styles?.join(' ')}`}
                id={item.id}
                style={{zIndex: item.zIndex}}
              >
                {item.content}
              </item.type>
            )
          })}
        </div>
      }

      <div className="left">
        {props?.data?.leftBox?.map((item, index) => {
          return (
            <item.type
            key={index}
            className={`${item.type} ${item?.styles?.join(' ')}`}
            id={item.id}
            style={{zIndex: item.zIndex}}
            >
              {item.content}
            </item.type>
          );
        })}
      </div>

      <div className="right" style={{ transform: 'translate(1px, 1px)'}} >
        {props?.menu?.menuItems && <Menu menuItems={props.menu.menuItems} />}
      </div>
    </div>
  );
}
