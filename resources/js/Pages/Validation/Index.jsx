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

            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Navigation */}
                    <nav className="flex gap-6 mb-12">
                        <Link
                            href="/"
                            className="bg-yellow-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            ← HOME
                        </Link>
                        <Link
                            href="/validation/guide"
                            className="bg-cyan-400 text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                        >
                            GUIDE →
                        </Link>
                    </nav>

                    {/* Page Title */}
                    <div className="border-8 border-black bg-white p-8 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h1 className="text-5xl font-black text-black uppercase tracking-tight">
                            Laravel Validation
                            <br />
                            実践
                        </h1>
                    </div>

                    {/* Info Box */}
                    <div className="border-6 border-black bg-green-100 p-6 mb-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-black font-bold text-lg">
                            <span className="text-2xl mr-2">💡</span>
                            このフォームで試せること: 送信後に、バリデーションの内部状態（ルール、エラー、検証済みデータ）を確認できます。
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name Field */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <label htmlFor="name" className="block text-xl font-black text-black uppercase mb-4">
                                名前 *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                placeholder="例: 山田太郎"
                                className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            />
                            <div className="mt-3 text-sm font-black text-black uppercase tracking-wider bg-yellow-100 px-3 py-2 inline-block border-2 border-black">
                                required | min:3 | max:50
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <label htmlFor="email" className="block text-xl font-black text-black uppercase mb-4">
                                メールアドレス *
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                placeholder="例: example@example.com"
                                className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            />
                            <div className="mt-3 text-sm font-black text-black uppercase tracking-wider bg-yellow-100 px-3 py-2 inline-block border-2 border-black">
                                required | email
                            </div>
                        </div>

                        {/* Age Field */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <label htmlFor="age" className="block text-xl font-black text-black uppercase mb-4">
                                年齢 *
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                                placeholder="例: 25"
                                className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            />
                            <div className="mt-3 text-sm font-black text-black uppercase tracking-wider bg-yellow-100 px-3 py-2 inline-block border-2 border-black">
                                required | numeric | min:18 | max:100
                            </div>
                        </div>

                        {/* Website Field */}
                        <div className="border-6 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <label htmlFor="website" className="block text-xl font-black text-black uppercase mb-4">
                                ウェブサイト（任意）
                            </label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={data.website}
                                onChange={(e) => setData("website", e.target.value)}
                                placeholder="例: https://example.com"
                                className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            />
                            <div className="mt-3 text-sm font-black text-black uppercase tracking-wider bg-yellow-100 px-3 py-2 inline-block border-2 border-black">
                                nullable | url
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-green-400 text-black px-8 py-6 text-2xl font-black uppercase border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            バリデーションを実行
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
