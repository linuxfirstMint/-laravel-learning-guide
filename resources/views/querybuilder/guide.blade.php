@extends('layouts.app')

@section('title', 'Query Builder 学習ガイド')
@section('theme', 'theme-querybuilder')

@section('content')
    <div class="nav-links">
        <a href="/">← ホームに戻る</a>
        <a href="/querybuilder">Query Builder デモを見る</a>
    </div>

    <h1>Laravel Query Builder 学習ガイド</h1>
    <p>このページでは、Query Builder の挙動確認ページを作成する一連の流れを解説します。</p>

    <div class="section">
        <h2>🎯 目標</h2>
        <p>以下のコードを実行して、クエリビルダーの内部挙動を確認できるページを作成します。</p>
        <div class="code-block">
            <pre>$query = User::where('age', '>', 18);

// 内部状態を見る
dd([
    'wheres' => $query->getQuery()->wheres,
    'bindings' => $query->getQuery()->getBindings(),
]);</pre>
        </div>
    </div>

    <div class="section">
        <h2>📋 実装の流れ</h2>

        <div class="step">
            <h3><span class="step-number">1</span>Controller の作成</h3>
            <p>まず、クエリビルダーの挙動を確認するためのコントローラーを作成します。</p>
            <div class="code-block">
                <pre>php artisan make:controller QueryBuilderController</pre>
            </div>
            <p>これにより <span class="command">app/Http/Controllers/QueryBuilderController.php</span> が作成されます。</p>
        </div>

        <div class="step">
            <h3><span class="step-number">2</span>Controller のロジック実装</h3>
            <p>作成されたコントローラーに、クエリビルダーの内部状態を取得するロジックを実装します。</p>
            <div class="code-block">
                <pre>public function index()
{
    // クエリビルダーの挙動を確認
    $query = User::where('age', '>', 18);

    // 内部状態を取得
    $queryState = [
        'wheres' => $query->getQuery()->wheres,
        'bindings' => $query->getQuery()->getBindings(),
        'sql' => $query->toSql(),
    ];

    return view('querybuilder.index', [
        'simpleQuery' => $queryState,
    ]);
}</pre>
            </div>
            <div class="tip">
                <strong>💡 ポイント:</strong>
                <ul>
                    <li><span class="command">getQuery()->wheres</span>: WHERE条件の配列を取得</li>
                    <li><span class="command">getQuery()->getBindings()</span>: プリペアドステートメントのバインド値を取得</li>
                    <li><span class="command">toSql()</span>: 生成されるSQLクエリを取得</li>
                </ul>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">3</span>View の作成</h3>
            <p>クエリビルダーの内部状態を表示するビューを作成します。</p>
            <div class="code-block">
                <pre>mkdir -p resources/views/querybuilder</pre>
            </div>
            <p>そして <span class="command">resources/views/querybuilder/index.blade.php</span> を作成し、以下の内容を実装:</p>
            <ul>
                <li>クエリコードの表示</li>
                <li>生成されるSQLの表示</li>
                <li>WHERE条件の内部配列の表示</li>
                <li>バインディング値の表示</li>
            </ul>
        </div>

        <div class="step">
            <h3><span class="step-number">4</span>Route の追加</h3>
            <p><span class="command">routes/web.php</span> にルートを追加します。</p>
            <div class="code-block">
                <pre>use App\Http\Controllers\QueryBuilderController;

Route::get('/querybuilder', [QueryBuilderController::class, 'index']);</pre>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">5</span>データベースの準備</h3>
            <p>Userモデルに <span class="command">age</span> カラムがないため、マイグレーションを作成します。</p>
            <div class="code-block">
                <pre>php artisan make:migration add_age_to_users_table --table=users</pre>
            </div>
            <p>マイグレーションファイルに以下を記述:</p>
            <div class="code-block">
                <pre>public function up(): void
{
    Schema::table('users', function (Blueprint $table) {
        $table->integer('age')->nullable()->after('email');
    });
}</pre>
            </div>
            <p>マイグレーションを実行:</p>
            <div class="code-block">
                <pre>php artisan migrate</pre>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">6</span>テストデータの作成</h3>
            <p>Tinker を使ってテストデータを作成します。</p>
            <div class="code-block">
                <pre>php artisan tinker

User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password'),
    'age' => 25
]);</pre>
            </div>
        </div>

        <div class="step">
            <h3><span class="step-number">7</span>動作確認</h3>
            <p>ブラウザで <span class="command">http://localhost:8001/querybuilder</span> にアクセスして、クエリビルダーの内部挙動を確認します。</p>
        </div>
    </div>

    <div class="section">
        <h2>🔍 クエリビルダーの内部構造</h2>

        <h3>wheres 配列の構造</h3>
        <p>各WHERE条件は以下のような配列で保存されています:</p>
        <div class="code-block">
            <pre>[
    'type' => 'Basic',        // 条件のタイプ
    'column' => 'users.age',  // カラム名
    'operator' => '>',        // 比較演算子
    'value' => 18,            // 比較する値
    'boolean' => 'and',       // 次の条件との論理演算子 (and/or)
]</pre>
        </div>

        <h3>bindings 配列</h3>
        <p>SQLインジェクション対策のため、値は別配列で管理されています:</p>
        <div class="code-block">
            <pre>[18, '%John%', 'test@example.com']  // プリペアドステートメントの値</pre>
        </div>

        <div class="note">
            <strong>⚠️ セキュリティのポイント:</strong><br>
            Laravelのクエリビルダーは、全ての値を <strong>bindings</strong> 配列に格納し、プリペアドステートメントとして実行します。
            これにより、SQLインジェクション攻撃を自動的に防いでいます。
        </div>
    </div>

    <div class="section">
        <h2>📚 学んだこと</h2>
        <ul>
            <li><strong>Artisan コマンド</strong>でController作成やマイグレーションが簡単にできる</li>
            <li><strong>MVC パターン</strong>: Controller → View → Route の流れ</li>
            <li><strong>クエリビルダー</strong>の内部状態は <span class="command">getQuery()</span> でアクセスできる</li>
            <li><strong>toSql()</strong> で実際に実行されるSQLを確認できる</li>
            <li>WHERE条件は配列として積み重ねられていく</li>
            <li>値はセキュリティのため別の配列で管理される</li>
        </ul>
    </div>

    <div class="section">
        <h2>🚀 次のステップ</h2>
        <ul>
            <li>JOIN クエリの内部構造を確認してみる</li>
            <li>サブクエリの挙動を調べてみる</li>
            <li>groupBy や having の内部状態を見てみる</li>
            <li>Eloquent の Relation クエリを深掘りする</li>
        </ul>
    </div>
@endsection
