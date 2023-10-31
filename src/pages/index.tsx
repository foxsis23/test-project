import { Typography } from "@mui/material";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Typography variant="h1" sx={{textAlign:'center',mb:'50px',fontWeight:'medium'}}>Welcome to test-project</Typography>
      <Typography variant="h2" sx={{":hover":{textDecoration:'underline'},textAlign:'center'}}>
        <Link href="/products" style={{textDecoration:'none',color:'black'}}>Go to products</Link>
      </Typography>
    </>
  )
}
