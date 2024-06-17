import logo from '../../assets/images.png'
import './banner.css'
export default function Banner(){
return (<>
            {/* <div className='banner'> */}
                <div className="center">
                    <div className='company-logo'>
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className='company-name'>
                        <h2>
                            XYZ Pharmacy inventory management system
                        </h2>
                    </div>
                </div>
            {/* </div> */}
        </>);
}