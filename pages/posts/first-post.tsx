import Link from 'next/link'

/**
 * 구성 요소의 이름은 제한이 없지만 내보내기로 내보내야 합니다 default.
 */
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
