'use client';

import React, { useEffect, useState } from 'react';
import styles from './NotFound.module.css';

// Japanese motivational/reflective blocks
const mainJapaneseBlocks = [
  "お探しのページは見つかりませんでした。ホームページにお戻りください。",
  "神は、人々が自らの状況を変えるまで、人々の運命を変えることはない。運命は決められたものではなく、自分の選択によって常に変わる。最初の一歩を踏み出せば、運命を切り開く力は常に自分の中にあることに気づくだろう。",
  "常に他人よりも自分の幸せを優先する。自分の幸せを後回しにしてはならない。自分が満たされてこそ、他人にも真の喜びを与えることができる。自分を大切にし、内から輝く幸福を感じよう。",
  "あなたの最優先事項は、あなた自身、あなた自身、あなた自身です。他人の期待に応えるために自分を犠牲にしてはならない。まずは自分を大切にし、自分自身の心に寄り添うことが重要である。",
  "困難な時に助けてくれた人たちを決して忘れない。感謝の気持ちを示し、恩を返すことで、善意の輪は広がっていく。人の優しさが世界を明るくするのだから。",
  "理解できないのなら、決して他人の興味を判断してはいけません。他人の道を尊重し、理解しようとする心こそが、本当の賢さである。",
  "愛する人を決して当たり前と思わないでください—できる限り大切にしてください。人生の時間は限られているからこそ、一緒にいる時間を大切にしよう。",
  "沈黙は平和の最も純粋な形です。静寂の中でこそ、心は落ち着き、真の平和を見つけることができる。",
  "自分を本当に幸せにしてくれるものを見つけ、他人の意見を気にせずにそれを追求してください。幸せとは、自分の心が満たされる瞬間にある。",
];

// System log lines
const systemLogs = [
  "システムがリスキャン - システムがチェックアウト...",
  "システムチェック を 開始中...",
  "実験データ 解析中...",
  "四角ブロック を 初期化...",
  "デバイス 確認: OK",
  "照射器: 完了",
  "転送バージョン 6.23.11.C",
  "エンドルフィン を 初期化...",
  "データセンター を クリーン",
  "データセンター を 起動中...",
  "全データベース システムOK",
  "全データをレンダリング中",
  "脳の準備完了_",
];

// Small Japanese blocks
const smallJapaneseBlocks = [
  "男がただありのままで愛されることは本当にそんなに難しいのだろうか 条件もなく期待もなくただそのままの自分で 男は無条件に愛し迷いなく心を捧げる しかし多くの女性は条件付きで愛を与える 安定を求め安心を求め確信を求める それが現実であり多くの男性が密かに抱える想いである しかしその苦しみを口にする者は少ない",
  "男であることは時に計り知れない重圧を伴う 大人になった瞬間から強さを求められ守る者であり支える者であり続けなければならない しかし男は誰に頼ればいいのだろうか 社会は男なら自立しろ弱音を吐くなすべての答えを持てと言う しかしどんなに強い男でも時には慰めや理解そして無条件の愛を求める瞬間がある",
  "男の価値はその心ではなく成し遂げたことによって測られる どれだけ稼げるかどれだけ成功しているかどれだけ他人の役に立てるか しかしもし彼がつまずいたら もし失敗したら もしその重荷に押し潰されそうになったら 多くの場合彼はそれを一人で抱え込まなければならない なぜならこの世界は倒れた男に対して簡単に手を差し伸べることはないからだ\nそれでもどんなに険しい道でも男は決して諦めることはできない どれほど疲れ果てても立ち続けなければならない どれほど傷ついても前に進み続けなければならない 社会は彼の回復を待ってはくれない ただ黙って立ち上がることを求める それが男らしさだとされるのだから そして男は学ぶのだ 痛みを隠し戦い続けることを",
  "ることをだが知ってほしい 強さとは苦しみがないことではない 倒れても立ち上がる男こそ本当の意味で強いのだ 決して屈せず決して諦めない 道のりは長く障害に満ちている 疑念に苛まれることもある 誰にも知られぬ心の中の戦いを繰り返すこともある それでもどんなに重い荷を背負っていても彼は進み続けるそしていつか彼は本物の愛に出会うのかもしれない 成功や失敗に関係なく何かを提供できるかどうかではなく彼自身を愛してくれる存在に 期待ではなく条件ではなくただありのままの彼を受け入れてくれる人に その日が来るまで彼は歩き続ける 沈黙の中で自分の使命を果たしながらそれでも希望を捨てずにそれが男であるということなのだから",
];

function TypewriterEffect({ blocks, className, speed = 20, delay = 200 }: {
  blocks: string[];
  className: string;
  speed?: number;
  delay?: number;
}) {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>(Array(blocks.length).fill(''));
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentBlock >= blocks.length) return;
    const msg = blocks[currentBlock];
    if (charIndex < msg.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[currentBlock] = msg.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const nextTimeout = setTimeout(() => {
        setCurrentBlock((m) => m + 1);
        setCharIndex(0);
      }, delay);
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, currentBlock, blocks, speed, delay]);

  return (
    <>
      {blocks.map((msg: string, i: number) => (
        <div key={i} className={className}>{displayed[i]}</div>
      ))}
    </>
  );
}

export default function NotFound() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftColumn}>
        <TypewriterEffect blocks={mainJapaneseBlocks} className={styles.mainJapaneseBlock} speed={20} delay={200} />
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.systemLogsSection}>
          <TypewriterEffect blocks={systemLogs} className={styles.systemLog} speed={15} delay={100} />
        </div>

        <div className={styles.errorSection}>
          <div className={styles.errorContainer} role="alert">
            <div className={styles.bracketTop} />
            <span className={styles.errorCode}>404</span>
            <span className={styles.errorText}>NOT FOUND</span>
            <span className={styles.errorCode}>404</span>
            <div className={styles.bracketBottom} />
          </div>
        </div>

        <div className={styles.smallJapaneseSection}>
          <TypewriterEffect blocks={smallJapaneseBlocks} className={styles.smallJapaneseBlock} speed={10} delay={150} />
        </div>
      </div>
    </div>
  );
}
