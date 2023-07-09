const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://i.ibb.co/${id}`;
const unsplashPhotos = [
    { id: "jhLkFgw/7-1.png", width: 1080, height: 1080 },
    { id: "7y3Lf2F/4-1.png", width: 1080, height: 1080 },
    { id: "PFkGP8S/2-5.jpg", width: 1080, height: 1080 },
    { id: "kH5xDpF/5-5.jpg", width: 1080, height: 1080 },
    { id: "k0qPqjV/3-4.jpg", width: 1080, height: 1080 },
];



const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;