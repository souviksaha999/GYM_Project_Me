import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';


export default function SkeletonCard() {
    return (
        <>
            <div style={{marginBottom : "50px"}}>
                <Stack spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width='100%' height={300} />

                </Stack>
            </div>

            <div style={{ display: "flex", columnGap: "15px", justifyContent: "center" }}>


                <Stack spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width={350} height={350} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={10} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={40} />
                </Stack>
                <Stack spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width={350} height={350} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={10} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={40} />
                </Stack>
                <Stack spacing={1}>
                    <Skeleton animation="wave" variant="rectangular" width={350} height={350} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={10} />
                    <Skeleton animation="wave" variant="rectangular" width={350} height={40} />
                </Stack>
                

            </div>

        </>
    )
}
