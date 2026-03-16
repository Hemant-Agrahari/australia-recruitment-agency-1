import React from "react";

interface BlogJsonLdProps {
  blogData: any;
  metadata: any;
  slug: string;
}

const BlogJsonLd: React.FC<BlogJsonLdProps> = ({ blogData, metadata, slug }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
        name: "Alliance Recruitment Agency UAE",
        url: "https://www.alliancerecruitmentagency.ae",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.alliancerecruitmentagency.com.au/#logo",
          url: "https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75",
          caption: "Alliance Recruitment Agency UAE",
        },
        telephone: "+918980018741",
        email: "sales@alliancerecruitmentagency.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+17809004752",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "CA",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+918980018741",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "IN",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+19179009072",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "US",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+442038380743",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "GB",
            availableLanguage: ["en"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Silicon Oasis, Dubai",
          addressLocality: "Dubai",
          addressRegion: "UAE",
          postalCode: "00000",
          addressCountry: "AE",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/Alliancerecruitmentagency/",
          "https://youtube.com/channel/UCTWg4i7ZXx1NTJ59SP8Nxrw",
          "https://www.linkedin.com/company/alliance-recruitment-agency/",
          "https://twitter.com/career_alliance",
        ],
        foundingDate: "2010",
        description:
          "We provide manpower services in Dubai, UAE. Our manpower consultants in Dubai will help you get the best International manpower recruitment services.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.alliancerecruitmentagency.ae/#website",
        url: "https://www.alliancerecruitmentagency.ae",
        name: "Alliance Recruitment Agency UAE",
        publisher: {
          "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.alliancerecruitmentagency.ae/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.alliancerecruitmentagency.ae/${slug}/#webpage`,
        url: `https://www.alliancerecruitmentagency.ae/${slug}`,
        name: metadata.title || "",
        isPartOf: {
          "@id": "https://www.alliancerecruitmentagency.ae/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`,
        },
        inLanguage: "en-US",
        datePublished: blogData?.createdAt || "",
        dateModified: blogData?.updatedAt || "",
        author: {
          "@id":
            "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai",
        },
      },
      {
        "@type": "Person",
        "@id":
          "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai",
        name: "Kelly Johnson",
        worksFor: {
          "@id":
            "https://www.alliancerecruitmentagency.ae/#employmentagency",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.alliancerecruitmentagency.ae",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.alliancerecruitmentagency.ae/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blogData?.bannerTitle || metadata.title,
            item: `https://www.alliancerecruitmentagency.ae/${slug}`,
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.alliancerecruitmentagency.ae/#primaryimage",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`,
        width: "1080",
        height: "580",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
};

export default BlogJsonLd;
