import myImage from '../assets/company.png';


export default function Home() {
    return (
        <>
            <h1>Darwin Travel</h1>
            <img src={myImage} alt="" className='company' />
        </>
    )
}