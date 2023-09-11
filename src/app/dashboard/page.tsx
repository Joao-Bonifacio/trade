export default function Func() {
    return (
        <>
        <h1 className="w-full bg-gray-800 text-gray-300 text-lg mb-3 p-3"> Dashboard </h1>

        <div className="bg-gray-500 rounded-md p-2 w-md">
            <div className="max-w-5xl rounded-md bg-gray-600 p-5 mx-auto text-gray-200 mt-4">
                <h1 className="text-center text-lg text-gray-300">
                    Variação de patrimônio
                </h1>
                chart-equity
            </div>

            <div className="max-w-5xl rounded-md bg-gray-600 p-5 mx-auto text-gray-200 mt-4">
                <h1 className="text-center text-lg text-gray-300">
                    Auto controle
                </h1>
                chart-consistency
            </div>

            <div className="max-w-5xl rounded-md bg-gray-600 p-5 mx-auto text-gray-200 mt-4">
                <h1 className="text-center text-lg text-gray-300">
                    Habilidades
                </h1>
                chart-skills
            </div>

            <div className="max-w-5xl rounded-md bg-gray-600 p-5 mx-auto text-gray-200 mt-4">
                <h1 className="text-center text-lg text-gray-300">
                    Métricas
                </h1>
                <div className="flex">
                    <div className="flex-1">
                        <h1 className="text-center text-md text-gray-300">
                            Média de auto controle
                        </h1>
                        average-consistency
                    </div>
                    <div className="flex-1">
                        <h1 className="text-center text-md text-gray-300">
                            Acertividade
                        </h1>
                        acuracy
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}