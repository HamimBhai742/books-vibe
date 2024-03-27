

const Footer = () => {
    return (
        <div>
            {/* <footer className="footer items-center p-4 bg-black shadow-2xl text-neutral-content px-8">
                <aside className="items-center grid-flow-col text-white">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-book-vibes-book-lover-bookworm-books-reading-toms-tee-store.jpg" className="w-16 h-16" alt="" />
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white text-3xl">
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://web.whatsapp.com/" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </nav>
            </footer> */}

            <footer className="footer footer-center p-10 bg-black rounded text-white">
                <nav className="grid grid-flow-col gap-4">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-book-vibes-book-lover-bookworm-books-reading-toms-tee-store.jpg" className="w-24 h-24" alt="" />
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;