import React from "react";
import Script from "next/script";

export function ChatSupport() {
  const chat_code = process.env.NEXT_PUBLIC_TIDIO_CHAT_CODE;
  const chat_url = "//code.tidio.co/".concat(chat_code).concat(".js");
  return (
    <>
      <Script src={chat_url} strategy="lazyOnload" />
      <Script id="chat-support-code" strategy="lazyOnload">
        {`document.tidioChatCode = "${chat_code}"`}
      </Script>
    </>
  );
}
