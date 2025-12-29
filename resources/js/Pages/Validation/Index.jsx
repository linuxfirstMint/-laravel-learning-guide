import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index() {
    const { data, setData, post, processing } = useForm({
        name: "",
        email: "",
        age: "",
        website: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/validation/validate");
    };

    return (
        <>
            <Head title="Validation 実践" />
            <div className="theme-validation">
                <style>{`
                    body {
                        max-width: 800px;
                    }
                `}</style>

                <div className="nav-links">
                    <Link href="/">← ホームに戻る</Link>
                    <Link href="/validation/guide">学習ガイドを見る</Link>
                </div>

                <h1>Laravel Validation 実践</h1>

                <div className="section">
                    <div className="info">
                        <strong>💡 このフォームで試せること:</strong>
                        <br />
                        送信後に、バリデーションの内部状態（ルール、エラー、検証済みデータ）を確認できます。
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">名前 *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                placeholder="例: 山田太郎"
                            />
                            <div className="rules">required | min:3 | max:50</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">メールアドレス *</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                placeholder="例: example@example.com"
                            />
                            <div className="rules">required | email</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">年齢 *</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                                placeholder="例: 25"
                            />
                            <div className="rules">required | numeric | min:18 | max:100</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">ウェブサイト（任意）</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={data.website}
                                onChange={(e) => setData("website", e.target.value)}
                                placeholder="例: https://example.com"
                            />
                            <div className="rules">nullable | url</div>
                        </div>

                        <button type="submit" disabled={processing}>
                            バリデーションを実行
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
