import { constStyles } from '@/styles/constStyles';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const description =
  'Coqui Saporana is a frog vtuber who streams on Twitch. She is also a member of the 3AM VTuber group.';
const themeColor = constStyles.brandPurple;

/**
 * Represents the metadata configuration.
 * See {@link https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object | Next.js Metadata Object} for more information.
 */
export const metadata = {
  title: {
    template: 'COQUI',
    default: 'COQUI',
  },
  applicationName: 'coqui.monster',
  description: description,
  keywords: [
    'coqui, vtuber, 3AM, southside, south side, twitch, streamer, frog, coqui monster, c0qui',
  ],
  metadataBase: baseURL,
  author: 'Sevrene, sevrene.dev@outlook.com',
  creator: 'Sevrene, sevrene.dev@outlook.com',

  openGraph: {
    title: 'COQUI',
    description: description,
    url: 'https://coqui.monster',
    siteName: 'coqui.monster',
    images: [
      {
        url: `${baseURL}/images/brand/shareImage.jpg`,
        width: 800,
        height: 600,
        alt: 'COQUI Thumbnail',
      },
    ],
    type: 'website',
    color: themeColor,
  },

  twitter: {
    title: 'COQUI',
    description: description,
    image: {
      url: `${baseURL}/images/brand/shareImage.jpg`,
      width: 800,
      height: 600,
      alt: 'COQUI Thumbnail',
    },
    card: 'summary_large_image',
    color: themeColor,
  },
};

/**
 * Represents the viewport configuration
 * See {@link https://nextjs.org/docs/app/api-reference/functions/generate-viewport#the-viewport-object | Next.js Viewport Object} for more information.
 */
export const viewport = {
  themeColor: themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};

/**
 * Root layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered root layout.
 */
export default function RootLayout({ children }) {
  return <html lang='en'>{children}</html>;
}
