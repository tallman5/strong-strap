import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { BrickWall, Masonry } from "../../strong-strap";

interface IItem {
    id: number
}

const Walls = () => {
    const [items, setItems] = useState<IItem[]>([])
    useEffect(() => {
        if (items.length > 0) return
        const newItems = []
        for (let index = 0; index < 20; index++) {
            const item: IItem = { id: index }
            newItems.push(item)
        }
        setItems(newItems)
    }, [items])
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Walls</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Brick Wall</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <BrickWall columnWidth={200}>
                            {
                                items.map((item: IItem) => {
                                    return (
                                        <div className="card" key={item.id} style={{ width: '200px', flexGrow: 1, flexShrink: 0 }}>
                                            <StaticImage src='../../images/testimg1.jpg' className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </BrickWall>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Masonry Wall</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Masonry>
                            {
                                items.map((item: IItem) => {
                                    return (
                                        <div className="card" key={item.id}>
                                            <StaticImage src='../../images/testimg1.jpg' className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Masonry>
                        <br />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Walls
