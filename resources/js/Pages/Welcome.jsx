import React from "react";

export default function Welcome() {
    return (
        <div
            style={{
                fontFamily: "system-ui",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
            }}
        >
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                🚀 Inertia.js + React 起動成功！
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
                LaravelからReactページが表示されました。
            </p>
            <div
                style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                }}
            >
                これから各学習ページを移行していきます。
            </div>
        </div>
    );
}
