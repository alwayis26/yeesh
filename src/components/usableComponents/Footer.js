import '../../global.css'

const Footer = () => {
    return (
        <div className="fo">
            <div className="fospan">
                <p>[03] Footer</p>
            </div>
            <div className="foheader">
                <h1>LETS BUILD</h1>
                <div className="foheaderpanel">
                    <h1>INTERFACES TOGETHER</h1>
                    <p>wayiskarnis@gmail.com<a href="" title='copy email'><i class="fa-regular fa-copy"></i></a></p>
                </div>
            </div>
            <div className="fotable">
                <div className="foleft">
                    <h2>Socials</h2>
                    <div className="foleftlink">
                        <a href="">Linkedln</a>
                        <a href="">Behance</a>
                        <a href="">Github</a>
                        <a href="">Twitter/x</a>
                    </div>
                </div>
                <div className="foright">
                    <p>© 2024 Al Wayis Karnis. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
