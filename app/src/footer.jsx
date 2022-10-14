
export default function footer (){
    return(
        <div className='row mt-5 border border-dark border-3'>
            <div className='col-12 col-sm-12 col-md-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus" className='pt-3 fluid' width='100%' height='300px'  style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
                <div className='col-12 col-sm-12 col-md-6'>
                    <h2 className='text-center text-md-end text-lg-end text-decoration-underline'>Hours of Operation:</h2>
                    <p className=' text-center text-md-end text-lg-end'>Sunday: 10:00AM to 5:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Monday: 8:00AM to 9:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Tuesday: 8:00AM to 9:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Wednesday: 8:00AM to 9:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Thursday: 8:00AM to 9:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Friday: 8:00AM to 11:00PM</p>
                    <p className='text-center text-md-end text-lg-end'>Saturday: 8:00AM to 11:00PM</p>
                </div>
            </div>

    )
}