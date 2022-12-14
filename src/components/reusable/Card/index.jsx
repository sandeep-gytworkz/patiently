import { FaRegCopy } from "react-icons/fa";

const Card = ({title, value, subTitle, subValue, iconColor, iconBackground}) => {

    return(
        <div className="col-3 pe-2">
            <div className="d-flex flex-row records-card p-4">
              <div className="col-7">
                <h3 style={{whiteSpace: "nowrap"}} className="fs-18 dashboard-primary-color">{title}</h3>
                <h4 className="py-2 fs-32 dashboard-primary-color">
                  <span className="rounded-1 p-2 me-2 text-dark bg-opacity-10" style={{backgroundColor: iconBackground}}>
                    <FaRegCopy color={iconColor} size={"22px"} />
                  </span>
                  {value}
                </h4>
              </div>
              { subTitle &&
                <div className="col-5">
                    <h5 className="fs-16 dashboard-primary-color">
                        {subTitle}
                    </h5>
                    <h4 className="dashboard-primary-color">{subValue}</h4>
              </div>
              }
            </div>
          </div>
    )
}

export default Card;