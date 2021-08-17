import Image from "next/image"
import s from "./Private.module.css"
import first from "../../../public/assets/people.png"
import second from "../../../public/assets/video-chat(1).png"
import third from "../../../public/assets/startup.png"
import fourth from "../../../public/assets/newbie.png"
import fifth from "../../../public/assets/usp.png"

export default function Private({
    privatetitle,
    privatedescription,
    firstresource,
    secondresource,
    thirdresource,
    fourthresource,
    fifthresource

}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.wave}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={s.svg}>
                <path fill="#FF8E00" d="M-4.23,53.77 C150.00,150.00 271.49,-50.00 501.97,69.57 L500.00,0.00 L0.00,0.00 Z"></path>
            </svg>
            </div>
            <div className={s.responsive}>
                <div className={s.bottom}>
               <svg id="visual" className={s.keeper}  viewBox="0 0 1920 1080" ><rect x="0" y="0" width="1920" height="1080" fill="#171717"></rect><path d="M0 801L53.3 787.7C106.7 774.3 213.3 747.7 320 752.2C426.7 756.7 533.3 792.3 640 792.7C746.7 793 853.3 758 960 772.2C1066.7 786.3 1173.3 849.7 1280 866.2C1386.7 882.7 1493.3 852.3 1600 837.3C1706.7 822.3 1813.3 822.7 1866.7 822.8L1920 823L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#cccccc" className={s.path}></path><path d="M0 861L53.3 849.2C106.7 837.3 213.3 813.7 320 792.8C426.7 772 533.3 754 640 778.3C746.7 802.7 853.3 869.3 960 895.7C1066.7 922 1173.3 908 1280 873.3C1386.7 838.7 1493.3 783.3 1600 764C1706.7 744.7 1813.3 761.3 1866.7 769.7L1920 778L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#ddc0aa" className={s.path}></path><path d="M0 792L53.3 794.8C106.7 797.7 213.3 803.3 320 823.7C426.7 844 533.3 879 640 904.5C746.7 930 853.3 946 960 941.3C1066.7 936.7 1173.3 911.3 1280 908.5C1386.7 905.7 1493.3 925.3 1600 920.2C1706.7 915 1813.3 885 1866.7 870L1920 855L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#eab487" className={s.path}></path><path d="M0 989L53.3 981.7C106.7 974.3 213.3 959.7 320 951.2C426.7 942.7 533.3 940.3 640 928C746.7 915.7 853.3 893.3 960 900.5C1066.7 907.7 1173.3 944.3 1280 945.7C1386.7 947 1493.3 913 1600 902C1706.7 891 1813.3 903 1866.7 909L1920 915L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#f3a864" className={s.path}></path><path d="M0 980L53.3 981.8C106.7 983.7 213.3 987.3 320 978C426.7 968.7 533.3 946.3 640 935.2C746.7 924 853.3 924 960 921C1066.7 918 1173.3 912 1280 919.3C1386.7 926.7 1493.3 947.3 1600 957C1706.7 966.7 1813.3 965.3 1866.7 964.7L1920 964L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#fa9b3f" className={s.path}></path><path d="M0 1013L53.3 1008.3C106.7 1003.7 213.3 994.3 320 987.3C426.7 980.3 533.3 975.7 640 975.3C746.7 975 853.3 979 960 981C1066.7 983 1173.3 983 1280 986.5C1386.7 990 1493.3 997 1600 996.2C1706.7 995.3 1813.3 986.7 1866.7 982.3L1920 978L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z" fill="#ff8e00" className={s.path}></path></svg>
                </div>
                <div className={s.content}>
                    <div className={s.textbox}>
                        <h3 className={s.title}>
                            {privatetitle}
                        </h3>
                        <p className={s.description}>
                            {privatedescription}
                        </p>
                    </div>
                    <div className={s.items}>
                    <div className={s.card}>
                        <div className={s.itemimage}>
                        <Image src={first} width={128} height={128} layout="intrinsic" />
                        </div>
                        <div className={s.cardtext}>
                        <h3 className={s.itemtitle}>
                        {firstresource}
                        </h3>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.itemimage}>
                        <Image src={second} width={128} height={128} layout="intrinsic" />
                        </div>
                        <div className={s.cardtext}>
                        <h3 className={s.itemtitle}>
                        {secondresource}
                        </h3>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.itemimage}>
                        <Image src={third} width={128} height={128} layout="intrinsic" />
                        </div>
                        <div className={s.cardtext}>
                        <h3 className={s.itemtitle}>
                        {thirdresource}
                        </h3>
                        </div>
                   </div>
                    </div>
                    <div className={s.andmore}>
                    <div className={s.morecard}>
                        <div className={s.moreimage}>
                        <Image src={fourth} width={128} height={128} layout="intrinsic" />
                        </div>
                        <div className={s.moretext}>
                        <h3 className={s.moretitle}>
                        {fourthresource}
                        </h3>
                        </div>
                    </div>
                    <div className={s.morecard}>
                        <div className={s.moreimage}>
                        <Image src={fifth} width={128} height={128} layout="intrinsic" />
                        </div>
                        <div className={s.moretext}>
                        <h3 className={s.moretitle}>
                        {fifthresource}
                        </h3>
                        </div>
                    </div>
                    </div>            
                </div>
            </div>
        </div>
        </section>
    )
}