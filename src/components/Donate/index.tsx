import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ImageHappyBoy from "@/assets/images/happy-boy.png";
import ImageHappyGirl from "@/assets/images/happy-girl.png";
import ImageThankYou from "@/assets/images/thank-you.png";

export default function Donate() {
    return (
        <Link href="">
            <Box sx={{
                content: '""',
                width: "100%",
                height: "calc(100% - 94.5rem)",
                minHeight: "12rem",
                backgroundColor: "#ad917f",
                borderRadius: ".4rem",
                boxShadow: 3,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                display: {xs: "flex", md: "none", lg: 'flex'},
                marginBottom: {xs: "1.6rem", md: "3.2rem"}
            }}>                
                <Typography variant="h4" sx={{
                    color: "#fff",
                    fontWeight: "600"}}
                >
                    Click để ủng hộ chúng tôi
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: "75%"}}>
                    <Image 
                        src={ImageHappyBoy}
                        alt=""
                        width={70}
                    />
                    <Image 
                        src={ImageThankYou}
                        alt=""
                        width={65}
                    />
                    <Image 
                        src={ImageHappyGirl}
                        alt=""
                        width={70}
                    />
                </Box>
            </Box>
        </Link>
    );
};