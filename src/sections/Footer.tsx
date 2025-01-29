
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flew-wrap gap-5">
        <div className="text-white-500 gap-2 flex">
            <p>© 2025 Manan | All Rights Reserved</p>
        </div>

        <div className="gap-3 flex">
            <a href="https://github.com/manan-msqrd" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="GitHub" className="w-2/3 h-2/3"/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/manan-manchanda-dev" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-2/3 h-2/3"/>
        </div>
    </a>
</div>

    </section>
  )
}

export default Footer