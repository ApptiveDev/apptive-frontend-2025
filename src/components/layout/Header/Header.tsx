interface HeaderProps {
  logoText?: string;
  isLoggedIn?: boolean;
  userName?: string;
}

export const Header = ({
  logoText = "Makers",
  isLoggedIn = false,
  userName,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold">{logoText}</div>

      <nav className="flex items-center gap-6">
        <a href="/" className="hover:text-blue-600">
          홈
        </a>
        <a href="/about" className="hover:text-blue-600">
          소개
        </a>
        <a href="/projects" className="hover:text-blue-600">
          프로젝트
        </a>
      </nav>

      <div>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span>{userName}</span>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              로그아웃
            </button>
          </div>
        ) : (
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            로그인
          </button>
        )}
      </div>
    </header>
  );
};
