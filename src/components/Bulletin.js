import React from "react";

const Bulletin = () => {
    return (
        <div id="newsScroll" className="news-scroll">

            <div className="container-fluid">
                <div className="col-md-12">
                    <marquee id="latestNews" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"><a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=40286">২০২৪ শিক্ষাবর্ষে ছাত্র ভর্তি বিজ্ঞপ্তি-সংশোধিত (তৃতীয় ও ষষ্ঠ )</a><a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=40284">অত্র কলেজে  এইচএসসি পরীক্ষার্থীদের ব্যবহারিক পরীক্ষার সময়সূচি-২০২৩</a><a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=40283">একাদশ শ্রেণির ভর্তি ও প্রয়োজনীয় কাগজপত্র সংক্রান্ত নোটিশ ***</a><a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=40280">২০২৩-২০২৪ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির বিজ্ঞপ্তি </a><a href="Pages/NewsEvents/NewsDetailsN.aspx?eventId=40275">⍟ অফিস আদেশ ( অ্যাকাডেমিক ক্যালেন্ডার পরিবর্তন প্রসঙ্গে) </a></marquee>

                </div>
            </div>
        </div>
    )
}


export default Bulletin